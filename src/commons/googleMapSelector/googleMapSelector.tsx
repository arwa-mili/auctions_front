import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
  FC,
} from "react";
import { APIProvider, Map, MapMouseEvent } from "@vis.gl/react-google-maps";
import * as h3 from "h3-js"; // v4+
import {
  Box,
  Typography,
  Slider,
  Stack,
  Chip,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
//components
import { Polygon } from "./polygon";
import { Button } from "../button/button";
import { Alert } from "../alert/alert";
import { Svgs } from "../../svgs";
//styles
import {
  Container,
  Content,
  Footer,
  Header,
  Panel,
} from "./googleMapSelector.styles";
//types
import { GoogleMapSelectorProps, SelectedHex } from "./googleMapSelector.types";

const DEFAULT_RESOLUTIONS = 6;

const GoogleMapSelector: FC<GoogleMapSelectorProps> = (props) => {
  const {
    apiKey,
    defaultCenter = { lat: 36.8065, lng: 10.1815 },
    defaultZoom = 9,
    texts,
    isLoadingSave,
    defaultSelected,
  } = props;
  const theme = useTheme();
  const [resolution, setResolution] = useState<number>(DEFAULT_RESOLUTIONS);
  const [selected, setSelected] = useState<Record<string, SelectedHex>>({});

  // guard to avoid immediate re-add when clicking a polygon (Map onClick fires shortly after)
  const ignoreMapClicksUntil = useRef<number>(0);

  const totalAreaKm2 = useMemo(
    () => Object.values(selected).reduce((sum, s) => sum + s.areaKm2, 0),
    [selected]
  );

  const selectedArray = useMemo(() => Object.values(selected), [selected]);

  //functions
  const buildHex = useCallback(
    (lat: number, lng: number, res: number): SelectedHex => {
      const cell = h3.latLngToCell(lat, lng, res);
      const boundaryLatLng: [number, number][] = h3.cellToBoundary(cell, true); // [lng, lat]
      const path: google.maps.LatLngLiteral[] = boundaryLatLng.map(
        ([lng2, lat2]) => ({
          lat: lat2,
          lng: lng2,
        })
      );
      const areaKm2 = h3.cellArea(cell, "km2");
      const neighbors = h3.gridDisk(cell, 1).length;
      return { cell, lat, lng, path, areaKm2, neighbors };
    },
    []
  );

  const toggleHexAt = useCallback(
    (lat: number, lng: number, res: number) => {
      try {
        const cell = h3.latLngToCell(lat, lng, res);
        setSelected((prev) => {
          if (prev[cell]) {
            const { [cell]: _, ...rest } = prev;
            return rest;
          }
          const hex = buildHex(lat, lng, res);
          return { ...prev, [cell]: hex };
        });
      } catch (e) {
        console.error("toggleHexAt error:", e);
      }
    },
    [buildHex]
  );

  const removeCell = useCallback((cell: string) => {
    setSelected((prev) => {
      if (!prev[cell]) return prev;
      const { [cell]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const onClickPolygon = useCallback(
    (cell: string) => {
      // prevent the map's onClick from re-adding the hex immediately after
      ignoreMapClicksUntil.current = Date.now() + 150; // ~150ms guard
      removeCell(cell);
    },
    [removeCell]
  );

  const onClickMap = useCallback(
    (e: MapMouseEvent) => {
      // bail if just clicked a polygon
      if (Date.now() < ignoreMapClicksUntil.current) return;

      const latLng = e.detail.latLng;
      if (!latLng) return;
      const { lat, lng } = latLng;
      toggleHexAt(lat, lng, resolution);
    },
    [toggleHexAt, resolution]
  );

  const onChangeResolution = useCallback(
    (_: Event, value: number | number[]) => {
      const res = Array.isArray(value) ? value[0] : value;
      setResolution(res);
      // Recompute all selected at new res from their original anchor lat/lng
      setSelected((prev) => {
        const next: Record<string, SelectedHex> = {};
        for (const s of Object.values(prev)) {
          const h = buildHex(s.lat, s.lng, res);
          next[h.cell] = h;
        }
        return next;
      });
    },
    [buildHex]
  );

  const resetSelection = useCallback(() => {
    setSelected({});
  }, []);

  const onClickSave = () => {
    const newValues = Object.values(selected).map((value) => value);
    props.onClickSave?.(newValues);
  };

  useEffect(() => {
    // if no defaults, just preselect center (as before)
    if (defaultSelected.length === 0) {
      toggleHexAt(defaultCenter.lat, defaultCenter.lng, DEFAULT_RESOLUTIONS);
      return;
    }

    // build each hex from its cell id
    const loaded: Record<string, SelectedHex> = {};
    for (const item of defaultSelected) {
      try {
        const cell = item.cell;
        const [lat, lng] = h3.cellToLatLng(cell); // center of the hex
        const boundaryLatLng: [number, number][] = h3.cellToBoundary(
          cell,
          true
        );
        const path = boundaryLatLng.map(([lng2, lat2]) => ({
          lat: lat2,
          lng: lng2,
        }));
        const areaKm2 = h3.cellArea(cell, "km2");
        loaded[cell] = { cell, lat, lng, path, areaKm2, neighbors: 7 };
        const resolution = h3.getResolution(cell);
        setResolution(resolution);
        setSelected(loaded);
      } catch (err) {
        console.warn("Invalid default cell:", item, err);
      }
    }
  }, [defaultSelected, defaultCenter, toggleHexAt]);

  //render
  return (
    <APIProvider apiKey={apiKey}>
      <Container>
        <Header>
          <Typography fontSize={18} fontWeight="600">
            {texts?.title}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Tooltip title={texts?.resetSelection}>
              <IconButton
                size="small"
                aria-label="Reset selection"
                onClick={resetSelection}
              >
                <Svgs.IconRefreshCw05 fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Header>
        <Content>
          <Stack>
            <Typography gutterBottom variant="subtitle2">
              {texts?.resolution}
            </Typography>
            <Slider
              aria-label="H3 Resolution"
              value={resolution}
              min={0}
              max={15}
              step={1}
              onChange={onChangeResolution}
              marks={[
                { value: 0, label: "0" },
                { value: 5, label: "5" },
                { value: 10, label: "10" },
                { value: 15, label: "15" },
              ]}
            />
          </Stack>
          <Typography variant="subtitle2">{texts?.selection}</Typography>
          <Stack direction="row" gap={1} flexWrap="wrap">
            <Chip label={texts?.hexes?.(selectedArray.length)} />
            <Chip label={texts?.totalArea?.(totalAreaKm2)} color="primary" />
            <Chip label={texts?.r?.(resolution)} />
          </Stack>

          {selectedArray.length > 0 && (
            <>
              <Typography variant="subtitle2" sx={{ mt: 1 }}>
                {texts?.cells}
              </Typography>
              <Panel>{selectedArray.map((s) => s.cell).join(", ")}</Panel>
            </>
          )}
          <Alert
            type="info"
            iconComponent={<Svgs.IconInfoCircle color="info" />}
            message={texts?.emptyMessage}
          />
        </Content>
        <Footer>
          <Button
            variant="contained"
            sx={{ minWidth: 120 }}
            loading={isLoadingSave}
            onClick={onClickSave}
          >
            {texts?.save}
          </Button>
        </Footer>
      </Container>
      <Box position="relative">
        {/* Map */}
        <Map
          defaultZoom={defaultZoom}
          defaultCenter={defaultCenter}
          gestureHandling="greedy"
          disableDefaultUI={false}
          onClick={onClickMap}
          style={{ width: "100%", height: "100vh" }}
        >
          {Object.values(selected).map((s) => (
            <Polygon
              key={s.cell}
              paths={s.path}
              fillOpacity={0.25}
              fillColor={theme.palette.primary[300]}
              strokeOpacity={1}
              strokeColor={theme.palette.primary.main}
              strokeWeight={2}
              onClick={() => onClickPolygon(s.cell)} // click polygon to remove
            />
          ))}
        </Map>
      </Box>
    </APIProvider>
  );
};

export { GoogleMapSelector, type SelectedHex };

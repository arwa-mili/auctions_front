import { Box, FormHelperText, InputLabel, Typography } from "@mui/material";
import { DeltaStatic, Sources } from "quill";
import { FC, useMemo, useState } from "react";
import { useController, useFormContext, useWatch } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//mui
import { InputEditorContainer } from "./inputEditor.styles";
import { InputEditorProps } from "./inputEditor.types";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }],
    [{ script: "sub" }, { script: "super" }],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
  ],
};

const InputEditor: FC<InputEditorProps> = (props) => {
  //props
  const {
    name,
    rules,
    label,
    placeholder,
    maxCharacters,
    minHeight,
    disabled,
    color,
    onBlur,
    onFocus,
  } = props;
  const { control } = useFormContext();
  const { field, fieldState } = useController({ control, name, rules });
  const editorContent = useWatch({ control, name });

  const [counter, setCounter] = useState<number>(
    editorContent?.replace(/<(.|\n)*?>/g, "").trim().length || 0
  );
  //memo
  const borderColor = useMemo(() => color, [color]);
  const onChange = (
    value: string,
    delta: DeltaStatic,
    source: Sources,
    editor: ReactQuill.UnprivilegedEditor
  ) => {
    const characterCount = editor.getLength() - 1;

    if (maxCharacters && characterCount === maxCharacters + 1) {
      field.onChange(field.value);
      return;
    }
    field.onChange(value);
    setCounter(characterCount);
  };

  return (
    <Box flex={1} display="flex" flexDirection="column">
      <Box display="flex" alignItems="center">
        {label && <InputLabel htmlFor={label}>{label}</InputLabel>}
      </Box>
      <InputEditorContainer
        minHeight={minHeight}
        isdisabled={disabled ? "true" : "false"}
        bordercolor={borderColor}
      >
        <ReactQuill
          onBlur={onBlur}
          theme="snow"
          modules={modules}
          value={field.value}
          bounds=".left"
          readOnly={disabled}
          onFocus={onFocus}
          onChange={onChange}
          placeholder={placeholder}
        />
      </InputEditorContainer>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <FormHelperText id={`helper-${name}`} color="error">
          <Typography fontWeight={400} fontSize={12} color="error">
            {fieldState.error?.message}
          </Typography>
        </FormHelperText>
        {maxCharacters && (
          <FormHelperText sx={{ color: "grey.600" }}>
            {`${maxCharacters && counter > maxCharacters ? maxCharacters : counter} / ${maxCharacters}`}
          </FormHelperText>
        )}
      </Box>
    </Box>
  );
};
export { InputEditor };

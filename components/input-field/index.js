import { useState } from "react";
import { Text } from "../text";
import { useController } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import Select from "react-select";
import { Images } from "../../utils/images";
import "react-datepicker/dist/react-datepicker.css";

// Required Props for text field (input type)
// 1. label
// 2. error
// 3. name
// 4. defaultValue
// 5. placeholder
// 6. control
// 7. rules
// 8. icon 20X20

export const TextField = ({
  label,
  error,
  name,
  defaultvalue,
  placeholder,
  control,
  rules,
  icon,
  type,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    rules: { ...rules },
    defaultValue: defaultvalue,
  });

  return (
    <div>
      {error ? (
        <Text className="text-sm text-red-500 mb-1">{error}</Text>
      ) : (
        <Text className="text-sm text-gray-700 mb-1">{label}</Text>
      )}

      <div className={icon ? "relative" : ""}>
        <input
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched/blur
          value={value} // input value
          name={name} // send down the input name
          inputRef={ref} // send input ref, so we can focus on input when error appear
          placeholder={placeholder}
          type={type || "text"}
          min={0}
          className={
            error
              ? "w-full text-sm bg-gray-100 rounded-md outline-none p-3 border-red-400"
              : "w-full text-sm bg-gray-100 rounded-md outline-none p-3"
          }
        />

        {icon ? (
          <div className="text-gray-400 absolute top-3 left-3">{icon}</div>
        ) : null}
      </div>
    </div>
  );
};

// Required Props for password field (input type)
// 1. label
// 2. error
// 3. name
// 4. defaultValue
// 5. placeholder
// 6. control
// 7. rules
// 8. icon 20X20

export const PasswordField = ({
  label,
  error,
  name,
  defaultvalue,
  placeholder,
  control,
  rules,
  icon,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    rules: { ...rules },
    defaultValue: defaultvalue,
  });

  return (
    <div>
      {error ? (
        <Text className="text-sm text-red-500 mb-1">{error}</Text>
      ) : (
        <Text className="text-sm text-gray-700 mb-1">{label}</Text>
      )}

      <div className={icon ? "relative" : ""}>
        <input
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched/blur
          value={value} // input value
          name={name} // send down the input name
          inputRef={ref} // send input ref, so we can focus on input when error appear
          placeholder={placeholder}
          type="password"
          className={
            error
              ? "w-full text-sm bg-gray-100 rounded-md outline-none p-3 border-red-400"
              : "w-full text-sm bg-gray-100 rounded-md outline-none p-3"
          }
        />

        {icon ? (
          <div className="text-gray-400 absolute top-3 left-3">{icon}</div>
        ) : null}
      </div>
    </div>
  );
};

// Required Props for text field (input type)
// 1. label
// 2. error
// 3. name
// 4. defaultValue
// 5. placeholder
// 6. control
// 7. rules
// 8. icon 20X20

export const TextAreaField = ({
  label,
  error,
  name,
  defaultvalue,
  placeholder,
  control,
  rules,
  icon,
  rows,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    rules: { ...rules },
    defaultValue: defaultvalue,
  });

  return (
    <div>
      {error ? (
        <Text className="text-sm text-red-500 mb-1">{error}</Text>
      ) : (
        <Text className="text-sm text-gray-700 mb-1">{label}</Text>
      )}

      <div className={icon ? "relative" : ""}>
        <textarea
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched/blur
          value={value} // input value
          name={name} // send down the input name
          inputRef={ref} // send input ref, so we can focus on input when error appear
          placeholder={placeholder}
          type="text"
          rows={rows}
          className={
            error
              ? "w-full text-sm bg-gray-100 rounded-md outline-none p-3 border-red-400"
              : "w-full text-sm bg-gray-100 rounded-md outline-none p-3"
          }
        />

        {icon ? (
          <div className="text-gray-400 absolute top-3 left-3">{icon}</div>
        ) : null}
      </div>
    </div>
  );
};

// Required Props for (date picker)
// 1. label
// 2. error
// 3. name
// 4. defaultValue
// 5. placeholder
// 6. control
// 7. rules
// 8. icon 20X20

export const DateField = ({
  label,
  error,
  name,
  defaultvalue,
  placeholder,
  control,
  rules,
  icon,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    rules: { ...rules },
    defaultValue: defaultvalue,
  });

  return (
    <div>
      {error ? (
        <Text className="text-sm text-red-500 mb-1">{error}</Text>
      ) : (
        <Text className="text-sm text-gray-700 mb-1">{label}</Text>
      )}

      <div className={icon ? "relative" : ""}>
        <ReactDatePicker
          onChange={onChange} // send value to hook form
          onBlur={onBlur} // notify when input is touched/blur
          value={value} // input value
          name={name} // send down the input name
          inputRef={ref} // send input ref, so we can focus on input when error appear
          placeholderText={placeholder}
          selected={value}
          className={
            error
              ? "w-full text-sm bg-gray-100 rounded-md outline-none p-3 border-red-400"
              : "w-full text-sm bg-gray-100 rounded-md outline-none p-3"
          }
        />

        {icon ? (
          <div className="text-gray-400 absolute top-3 left-3">{icon}</div>
        ) : null}
      </div>
    </div>
  );
};

/** Required props for single select */
// 1. label
// 2. error
// 3. name
// 4. defaultValue
// 5. placeholder
// 6. control
// 7. rules
// 8. isSearchable

export const SingleSelect = ({
  error,
  name,
  defaultvalue,
  placeholder,
  control,
  rules,
  options,
  borderRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderBottomLeftRadius,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
    rules: { ...rules },
    defaultValue: defaultvalue,
  });

  return (
    <Select
      onChange={onChange} // send value to hook form
      onBlur={onBlur} // notify when input is touched/blur
      value={value} // input value
      name={name} // send down the input name
      inputRef={ref} // send input ref, so we can focus on input when error appear
      selected={value}
      isSearchable
      placeholder={placeholder}
      options={options}
      components={{
        DropdownIndicator: () => null,
      }}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: 0,
          height: "54px",
          paddingLeft: "10px",
          borderRadius: borderRadius || 0,
          borderTopRightRadius: borderTopRightRadius || 0,
          borderBottomRightRadius: borderBottomRightRadius || 0,
          borderTopLeftRadius: borderTopLeftRadius || 0,
          borderBottomLeftRadius: borderBottomLeftRadius || 0,
          borderColor: state.isFocused ? "white" : "white",
          boxShadow: "none",
        }),
      }}
    />
  );
};

/** Single file input  */
export const FileInput = (props) => {
  /* handle change */
  const handleChange = (event) => {
    const file = event.target.files[0];
    props.onSelected(file);
  };

  return (
    <div className="flex items-center space-x-6">
      <div className="shrink-0">
        <img
          className="h-16 w-16 object-cover"
          src={Images.PdfIcon}
          alt="File input"
        />
      </div>
      <label className="block">
        <input
          type="file"
          accept="application/pdf"
          className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          onChange={(event) => handleChange(event)}
        />
      </label>
    </div>
  );
};

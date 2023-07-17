import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Search } from "react-feather";
import { arraFromNumber } from "../../utils/helper";
import Select from "react-tailwindcss-select";

const yearOptions = () => {
  const years = [];
  for (let i = 0; i < 100; i++) {
    const item = 1980 + i;
    years.push({ label: item.toString(), value: item });
  }

  return years;
};

export const SearchForm = () => {
  const history = useRouter();
  const { register, handleSubmit } = useForm();

  /** handle year selection */
  const handleYearChange = (item) => {
    console.log(item);
  };

  const onSubmit = async (data) => {
    // history.push(`/researcher?query=${data.query}`);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="w-32">
            <Select
              isClearable
              isSearchable
              placeholder="Year"
              searchInputPlaceholder="Search..."
              options={yearOptions()}
              onChange={handleYearChange}
              classNames={{
                menu: "absolute z-10 w-full bg-white shadow-lg border rounded-xl py-1 mt-1.5 text-sm text-gray-700",
                list: "roundex-xl",
              }}
            />
          </div>
          <div className="grow">
            <input
              type="text"
              className="w-full rounded-l-full text-md outline-none py-[15px] px-[20px] border-0 shadow-none"
              placeholder="Search researcher ..."
              {...register("query", { required: true })}
            />
          </div>

          {/* Submit button */}
          <div className="flex-none p-1">
            <button
              type="submit"
              className="p-[10px] rounded-full transition-all shadow-lg text-white bg-primary hover:bg-secondary"
            >
              <Search size={25} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

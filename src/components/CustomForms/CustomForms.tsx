import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  title: string;
  company: string;
  start_date_month: string;
  employment_type: string;
  same_organisation:string;
  end_date_month: string;
  // etc.
};

function CustomForms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<any> = (data) => console.log("on Submit ", data);

  return (
    <div className="border p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
        <label>Title<span className="text-red-500 ml-1">*</span></label>
        <input className="border focus:border-blue-500 focus:ring focus:ring-blue-200" type="text" {...register("title", { required: "Title is required"})} />
        {errors.title?.message && <p className="text-red-500 text-sm">{errors.title.message}</p>}

        <label>Employment Type</label>
        {/* <input className="border focus:border-blue-500 focus:ring-blue-200" type="text" {...register("employment_type")} /> */}
        <select {...register("employment_type")} className="border focus:border-blue-500">
          <option value="full_time">Full time</option>
          <option value="contract">Contract</option>
        </select>
        <label>Company or organisation<span className="text-red-500 ml-1">*</span></label>
        <input className="border focus:border-blue-500 focus:ring-blue-200" type="text" {...register("company", { required: true })} />

        <div className="flex flex-row gap-1">
          <input type="checkbox" {...register("same_organisation")} />
          <label>I am currently working in this role</label>

        </div>

        <label>Start date<span className="text-red-500 ml-1">*</span></label>
        <div className="flex flex-col gap-1">
          <input type="month" {...register("start_date_month", { required: true })} />
          {/* <input type="text" placeholder="YYYY" {...register("start_date_year", { required: true })} /> */}
        </div>

        <label>End date<span className="text-red-500 ml-1">*</span></label>
        <div className="flex flex-col gap-1">
          <input type="month" {...register("end_date_month", { required: true })} />
          {/* <input type="text" placeholder="YYYY" {...register("end_date_year", { required: true })} /> */}
        </div>

        <div className="border-t-1 border-gray-300">
          <button className="bg-blue-300 hover:bg-blue-500 p-1 pl-3 pr-3 mt-2 rounded-3xl float-right" type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default CustomForms;

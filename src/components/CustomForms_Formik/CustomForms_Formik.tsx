import { Field, FormikProvider, useFormik } from "formik";


const CustomForms_Formik = () => {

    const formik = useFormik({
        initialValues: {
            title: '',
            employment_type: '',
            current_company: '',
            same_organisation: '',
            start_date: '',
            end_date: ''
        },
        validate: values => {
            const errors = {};
            if (!values?.title) {
                errors.title = 'Title is Required';
            }
            if (!values.employment_type) {
                errors.employment_type = 'Employment Type is Required'
            }
            if (!values.current_company) {
                errors.current_company = 'Company or Organisation is Required'
            }
            if (!values.start_date) {
                errors.start_date = "Start date is Required"
            }
            if (!values.end_date) {
                errors.end_date = "End date is Required"
            }
            return errors;
        },
        onSubmit: values => {
            console.log('form values', values)
        }
    })

    return (
        <div className="border border-solid 10px p-4 m-4">
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center gap-3">
                    <div>
                        <label>Title<span className="text-red-500 ml-1">*</span></label>
                        <input className="border focus:border-blue-500 focus:ring focus:ring-blue-200" type="email" onChange={formik.handleChange} value={formik.values.title} />
                        {formik.touched.title && formik.errors.title ? (
                            <div className="text-red-600 text-sm">
                                {formik.errors.title}
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <label>Employment Type</label>
                        <Field className="border focus:border-blue-500 focus:ring focus:ring-blue-200 ml-1" as="select" name="employment_type">
                            <option value="">Select Employment Type</option>
                            <option value="full_time">Full-Time</option>
                            <option value="contract">Contract</option>
                        </Field>
                        {formik.touched.employment_type && formik.errors.employment_type ? (
                            <div className="text-red-600 text-sm">
                                {formik.errors.employment_type}
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <label>Company or Organisation<span className="text-red-500 ml-1">*</span></label>
                        <input className="border focus:border-blue-500 focus:ring focus:ring-blue-200" type="text" value={formik.values.current_company} onChange={formik.handleChange} />
                    </div>
                    <div>
                        <input className="border focus:border-blue-500 focus:ring focus:ring-blue-200" type="checkbox" value={formik.values.same_organisation} onChange={formik.handleChange} /> <label>I am currently working in this role</label>
                    </div>
                    <div>
                        <label>Start Date<span className="text-red-500 ml-1">*</span></label>
                        <input className="border focus:border-blue-500 focus:ring focus:ring-blue-200" type="month" value={formik.values.start_date} onChange={formik.handleChange} />
                    </div>
                    <div>
                        <label>End Date<span className="text-red-500 ml-1">*</span></label>
                        <input className="border focus:border-blue-500 focus:ring focus:ring-blue-200" type="month" value={formik.values.end_date} onChange={formik.handleChange} />
                    </div>
                    <div className="border-t-1">
                        <button type="submit" className="mt-2 p-2 rounded-3xl bg-blue-300 hover:bg-blue-500 float-right">Submit</button>
                    </div>
                </form>
            </FormikProvider>
        </div>
    )
}

export default CustomForms_Formik;
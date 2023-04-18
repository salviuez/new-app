import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

// const formValidationSchema = yup.object({
//     email: yup.string().min(8),
//     password: yup.string().min(8, "need a bigger password").required("why not fill password")
//         .max(12, "too much password"),
// });

// export function BasicForm() {
//     const formik = useFormik({
//         initialValues: {
//             email: "arun@gmail.com",
//             password: "123",
//         },

//         validationSchema: formValidationSchema,
//         onSubmit: (values) => {
//             console.log("the values are", values);
//         },


//     });


//     return (
//         <form className="basic-form" onSubmit={formik.handleSubmit}>
//             <input
//                 name="email"
//                 type="email"
//                 placeholder="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}

//             />
//             {formik.touched.email && formik.errors.email ? formik.errors.email : null}
//             <input
//                 name="password"
//                 type="text"
//                 placeholder="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//             />
//             {formik.touched.password && formik.errors.password ? formik.errors.password : null}
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

const formValidationSchema = yup.object({
    email: yup.string().min(8).required("write email"),
    password: yup.string().min(8, "need a bigger password").required("why not fill password")
        .max(12, "too much password"),
});

export function BasicForm() {
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            email: "arun@gmail.com",
            password: "123",
        },

        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log("the values are", values);
        },


    });


    return (
        <form className="basic-form" onSubmit={handleSubmit}>
            <input
                name="email"
                type="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}

            />
            {touched.email && errors.email ? errors.email : null}
            <input
                name="password"
                type="text"
                placeholder="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {touched.password && errors.password ? errors.password : null}
            <button type="submit">Submit</button>
        </form>
    );
}

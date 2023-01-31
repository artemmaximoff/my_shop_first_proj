import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";


export const ProductProfileEditForm = ({ editProfile, profile }) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files[0]) {
            editProfile(e.target.files[0])
        }
    }

    return (
        <>
            <div><img className="w-1/3 center" src={profile.image}></img></div>
            <input type={"file"} onChange={onMainPhotoSelected} />
            <Formik
                initialValues={profile}

                onSubmit={(values) => {
                    editProfile(values)
                }}
            >
                {({ }) => (

                    <Form>

                        <div className="mt-2">title:
                            <Field
                                className="border py-2 px-4 w-full outline-0 mb-2"
                                name={'title'}
                                type={'text'}
                            />
                        </div>
                        <ErrorMessage className="" name="email" component="span" />
                        <div>price:
                            <Field
                                className="border py-2 px-4 w-full outline-0 mb-2"
                                name={'price'}
                                type={'number'}
                                placeholder={'price'} />
                        </div>
                        <ErrorMessage name="password" component="span" className="" />
                        <div>category:
                            <Field
                                className="border py-2 px-4 w-full outline-0 mb-2"
                                name={'category'}
                                as="select">
                                <option value="men's clothing">men's clothing</option>
                                <option value="women's clothing">women's clothing</option>
                                <option value="electronic">electronic</option>
                                <option value="jewelery">jewelery</option>
                            </Field>
                        </div>
                        <ErrorMessage name="password" component="span" className="" />
                        <div>description:
                            <Field
                                className="border py-2 px-4 w-full mb-2"
                                name={'description'}
                                type={'textarea'}
                                placeholder={'description'} />
                        </div>
                        <ErrorMessage name="password" component="span" className="" />

                        <button type="submit" className="px-8 py-2 rounded bg-red-300 flex-start">Save</button>
                    </Form>
                )}
            </Formik>
        </>
    )

}
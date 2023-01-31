import { Formik, Form, Field, ErrorMessage, setFieldValue } from "formik";
import axios, { AxiosError } from 'axios';

export const AddProduct = ({ createProduct, onClose }) => {

    const create = async (values) => {
        const productData = values
        const response = await axios.post('https://fakestoreapi.com/products', productData)
        createProduct(response.data)
        onClose()
    }

    return (
        <>
            <Formik
                initialValues={{
                    image: null,
                    title: '',
                    price: '',
                    description: '',
                    category: "men's clothing"
                }}

                onSubmit={(values) => {
                    create(values)
                }}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <input id="file" name="file" type="file" onChange={(event) => {
                            setFieldValue("image", event.currentTarget.files[0]);
                        }} />
                        <div>
                            <Field
                                className="border py-2 px-4 w-full outline-0 mb-2"
                                name={'title'}
                                type={'text'}
                                placeholder={'title'} />
                        </div>
                        <ErrorMessage className="" name="email" component="span" />
                        <div>
                            <Field
                                className="border py-2 px-4 w-full outline-0 mb-2"
                                name={'price'}
                                type={'text'}
                                placeholder={'price'} />
                        </div>
                        <ErrorMessage name="password" component="span" className="" />
                        <div>
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
                        <div>
                            <Field
                                className="border py-2 px-4 w-full mb-2"
                                name={'description'}
                                type={'select'}
                                placeholder={'description'} />
                        </div>
                        <ErrorMessage name="password" component="span" className="" />

                        <button type="submit" className="px-2 py-4 rounded bg-red-300 w-full">Add Product</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}
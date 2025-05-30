import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './ItemForm.css'; // Add styles for .error if needed

const ItemForm = ({ addItem }) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            qty: '',
            purpose: '',
            terms: false
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            qty: Yup.string().required('Required'),
            purpose: Yup.string().required('Required'),
            terms: Yup.boolean().oneOf([true], 'You must agree to the terms')
        }),
        onSubmit: (values, { resetForm }) => {
            addItem(values);
            resetForm();
        }
    });

  return (
    <div className='ItemForm'>
        <h3>Add an Item to the Inventory</h3>
        <form onSubmit={formik.handleSubmit}>
            <input
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="Name"
                className={formik.submitCount && formik.errors.name ? 'error' : ''}
            />

            <input
                id="qty"
                name="qty"
                type="text"
                placeholder="Quantity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.qty}
                className={formik.submitCount && formik.errors.qty ? 'error' : ''}
            />

            <textarea
                id="purpose"
                name="purpose"
                type="text"
                rows={5}
                placeholder="Purpose"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.purpose}
                className={formik.submitCount && formik.errors.purpose ? 'error' : ''}
            />

            <label className={formik.submitCount && formik.errors.terms ? 'error' : ''}>
                <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.terms}
                />
                Agree to terms
            </label>
        <div className='ItemForm-button'>
            <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;

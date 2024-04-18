import React from 'react';
import MultipleForm1 from './multipleForm1';
import MultipleForm2 from './multipleForm2';
import FormContextProvider from './FormContext';

function ParentForm() {
    return (
        <div>
            <FormContextProvider>
                <MultipleForm1 />
                <MultipleForm2 />
            </FormContextProvider>
        </div>
    );
}

export default ParentForm;
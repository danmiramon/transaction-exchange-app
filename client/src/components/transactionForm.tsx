import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

class TransactionForm extends React.Component<InjectedFormProps, {}> {
    render() {
        const { handleSubmit }  = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="reference">Reference</label></td>
                            <td><Field name="reference" component="input" type="text" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="amount">Amount</label></td>
                            <td><Field name="amount" component="input" type="number" /></td>
                        </tr>
                    </tbody>
                </table>
                <button>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'transaction'
})(TransactionForm);
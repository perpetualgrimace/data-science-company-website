import * as Yup from "yup";
import { withFormik, Form } from "formik";

import DefaultLayout from "/components/layout/DefaultLayout";

import Button from "/components/controls/Button";
import TextField from "/components/controls/TextField";

import SendIcon from "/components/icons/SendIcon";

function onSubmit(values) {
  const { name, email, message } = values;

  console.log(values);

  return true;
}

const TheForm = (props) => {
  const { touched, errors } = props;

  return (
    <DefaultLayout slug="contact">
      <section className="fullscreen-section contact-section">
        <h1 className="u-text-c u-title">Contact us</h1>

        <Form className="contact-form darkglass u-mh-auto u-mb-md">
          <TextField
            labelText="Your name"
            placeholder="Firstname Lastname"
            name="name"
            fontSize="md"
            touched={touched}
            errors={errors}
          />

          <TextField
            labelText="Email address"
            placeholder="your@emailaddress.com"
            name="email"
            fontSize="md"
            touched={touched}
            errors={errors}
          />

          <TextField
            labelText="How can we help?"
            placeholder=" "
            name="message"
            fontSize="md"
            touched={touched}
            errors={errors}
            as="textarea"
          />

          <Button className="contact-form-button" type="submit">
            <SendIcon /> Send message
          </Button>
        </Form>

        <address className="contact-address u-font-sm u-text-c">
          Dubai Media City, Office 300, Building 5, Dubai, UAE
        </address>
      </section>
    </DefaultLayout>
  );
};

const Contact = withFormik({
  mapPropsToValues: (props) => {
    return {
      name: props.name || "",
      email: props.email || "",
      message: props.message || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Invalid").required("Required"),
    name: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  }),
  handleSubmit: (values) => onSubmit(values),
})(TheForm);

export default Contact;

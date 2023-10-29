import { useSearchParams } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  query: Yup.string().max(50, 'Too Long!').required('Required'),
});

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handlerSearch = value => {
    searchParams.set('query', value);
    setSearchParams(searchParams);
    };

  return (
    <section>
      <h2>SearchForm</h2>
      <Formik
        initialValues={{
          query: query,
        }}
        validationSchema={schema}
        onSubmit={values => handlerSearch(values.query)}
      >
        <Form>
          <label>
            <Field name="query" />
            <ErrorMessage component="span" name="query" />
          </label>

          <button type="submit">Search</button>
        </Form>
          </Formik>
    </section>
  );
};

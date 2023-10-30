import { useSearchParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, ErrorMessageStyled, FieldStyled, FormStyled, Section, Title } from './SearchForm.styled';
import { Container } from 'components/Container/Container';
import { FiSearch } from 'react-icons/fi';

const schema = Yup.object().shape({
  query: Yup.string().required('Required'),
});

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handlerSearch = value => {
    searchParams.set('query', value);
    setSearchParams(searchParams);
  };

  return (
    <Section>
      <Container>
        <Title>SearchForm</Title>
        <Formik
          initialValues={{
            query: query,
          }}
          validationSchema={schema}
          onSubmit={values => handlerSearch(values.query)}
        >
          <FormStyled>
            <label>
              <FieldStyled name="query" autoFocus={true} />
              <ErrorMessageStyled component="span" name="query" />
            </label>

            <Button type="submit">
              <FiSearch />
            </Button>
          </FormStyled>
        </Formik>
      </Container>
    </Section>
  );
};

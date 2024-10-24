import styled from 'styled-components';
import docs, { type Doc } from 'utils/docs';
import Heading from 'components/Form/Heading';

const JobDocsContainer = styled.div`
p.doc-desc, p.doc-uses, ul {
  margin: 0.25rem auto 1.5rem auto;
}
ul {
  padding: 0 0.5rem 0 1rem;
}
ul li a {
  color: $"red";
}
summary { color: $"red";}
h4 {
  border-top: 1px solid $"red";
  color: $"red";
  opacity: 0.75;
  padding: 0.5rem 0;
}
`;

const DocContent = (id: string) => {
  const doc = docs.filter((doc: Doc) => doc.id === id)[0] || null;
  return (
    doc? (<JobDocsContainer>
      <Heading as="h3" size="medium" color="red">{doc.title}</Heading>
      <Heading as="h4" size="small">Acerca de</Heading>
      <p className="doc-desc">{doc.description}</p>
      <Heading as="h4" size="small">Casos de Uso</Heading>
      <p className="doc-uses">{doc.use}</p>
      <Heading as="h4" size="small">Enlaces</Heading>
      <ul>
        {doc.resources.map((resource: string | { title: string, link: string } , index: number) => (
          typeof resource === 'string' ? (
            <li id={`link-${index}`}><a target="_blank" rel="noreferrer" href={resource}>{resource}</a></li>
          ) : (
            <li id={`link-${index}`}><a target="_blank" rel="noreferrer" href={resource.link}>{resource.title}</a></li>
          )
        ))}
      </ul>
      <details>
        <summary><Heading as="h4" size="small">Ejemplo</Heading></summary>
        <img width="300" src={doc.screenshot} alt="Screenshot" />
      </details>
    </JobDocsContainer>)
  : (
    <JobDocsContainer>
      <p>Estos son los resultados en bruto generados desde tu URL, en formato JSON. Puedes importarlos a tu propio programa para más análisis.</p>
    </JobDocsContainer>
    ));
};

export default DocContent;

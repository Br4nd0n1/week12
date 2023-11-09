import Layout from '../components/layout';
import { getIdList, getPerson } from '../lib/read_data';

export async function getStaticProps( { params } )
{
  const personData = await getPerson(params.id);
  return {
    props: {
      personData
    }
  };
}

export async function getStaticPaths() 
{
  const paths = getIdList();
  return {
    paths,
    fallback: false
  };
}

export default function displayLieutenants( { personData } ) 
{
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
        <h5 className="form-control">Post Title: {personData.post_title}</h5>
          <p className="form-control">Post Author: {personData.post_author}</p>
          <p className="form-control">Post Date: {personData.post_date}</p>
          <p className="form-control">Post Content: {personData.post_content.replace(/<[^>]*>/g, '')}</p>
          <p className="form-control">Post Status: {personData.post_status}</p>
        </div>
      </article>
    </Layout>
  );
}
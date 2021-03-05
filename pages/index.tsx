import { useLazyQuery } from '@apollo/react-hooks';
import JOBS_QUERY from '../gpl/jobs.query';
import { Table, Button } from 'antd';;
import { IJob } from "../types";

interface JobsData {
  jobs: Array<IJob>
}

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => tag.name).join(", ")}
      </span>
    ),
  }
];

export default function Home() {
  const [getJobs, { data, loading, error }] = useLazyQuery<JobsData>(JOBS_QUERY);
  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return (
    <main className='container'>
      {data && data.jobs && data.jobs.length ? <Table columns={columns} dataSource={data.jobs} pagination={{ defaultPageSize: 1 }} />
        : <Button onClick={() => getJobs()}>Load Data</Button>}
    </main>
  )
}

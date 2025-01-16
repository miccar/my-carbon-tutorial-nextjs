'use client';

const WorkflowWId = ({ params }) => {
  console.log(params);
  const { id, wid } = params;

  return (
    <div>
      <h1>Pippo ID: {id}</h1>
      <h1>WorkflowWId ID: {wid}</h1>
      {/*   <ul>
        <li>
          <a href={`/pippo/${id}/workflow`}>Go to Workflow</a>
        </li>
        <li>
          <a href={`/pippo/${id}/release`}>Go to Release</a>
        </li>
      </ul> */}
    </div>
  );
};
export default WorkflowWId;

'use client';

const PippoId = ({ params }) => {
  const { id } = params;

  return (
    <div id="pippo">
      <h1>Pippo ID: {id}</h1>
      <p>Welcome to the Pippo ID page.</p>
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
export default PippoId;

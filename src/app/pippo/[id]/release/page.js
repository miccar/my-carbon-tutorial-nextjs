'use client';

const Release = ({ params }) => {
  const { id } = params;

  return (
    <div className="release-page__r1">
      <h1>Release Page</h1>
      <p>This is the release page for Pippo ID: {id}</p>
    </div>
  );
};
export default Release;

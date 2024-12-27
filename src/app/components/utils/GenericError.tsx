export const GenericError = ({ err} : { err: unknown}) => {
  return <div>
    <p>
      Encountered an error
    </p>
    <pre className="bg-gray-100 p-4 whitespace-normal">
      <code>
        {JSON.stringify(err)}
      </code>
    </pre>
  </div>
}

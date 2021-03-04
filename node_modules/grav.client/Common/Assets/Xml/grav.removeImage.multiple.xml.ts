export const removeImageMultipleXml = `
<?xml version="1.0"?>
<methodResponse>
  <params>
    <param>
      <value>
        <struct>
          <member><name>{{email1}}</name><value><boolean>1</boolean></value></member>
          <member><name>{{email2}}</name><value><boolean>1</boolean></value></member>
        </struct>
      </value>
    </param>
  </params>
</methodResponse>
`;

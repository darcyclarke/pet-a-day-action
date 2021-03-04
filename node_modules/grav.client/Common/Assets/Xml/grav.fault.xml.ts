export const faultXml = `
<?xml version="1.0"?>
<methodResponse>
    <fault>
        <value>
        <struct>
        <member>
            <name>faultCode</name>
            <value><int>-9</int></value>
        </member>
        <member>
            <name>faultString</name>
            <value><string>{{errorMessage}}</string></value>
        </member>
        </struct>
    </value>
    </fault>
</methodResponse>
`;

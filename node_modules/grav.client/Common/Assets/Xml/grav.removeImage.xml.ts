export const removeImageXml = `
<?xml version="1.0"?>
<methodResponse>
    <params>
        <param>
            <value>
                <struct>
                    <member>
                        <name>{{email}}</name>
                        <value>
                            <boolean>1</boolean>
                        </value>
                    </member>
                </struct>
            </value>
        </param>
    </params>
</methodResponse>
`;

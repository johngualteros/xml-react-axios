import axios from "axios";

export const convertNumber = async (number) => {
  const config = {
    headers: {
        "Content-Type": "text/xml",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "charset": "utf-8"
    },
  };

  const body = `
    <?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
        <ubiNum>${number}</ubiNum>
        </NumberToWords>
    </soap:Body>
    </soap:Envelope>
    `;

  try {
    return await axios.post(
      "https://www.dataaccess.com/webservicesserver/NumberConversion.wso",
        body,
        config
    ).then((response) => {
        return response.data;
    });
  } catch (error) {
    console.log(error);
  }
};

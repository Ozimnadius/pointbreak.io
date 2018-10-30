const smartgrid = require('smart-grid');

smartgrid('./css/layout', {
    mobileFirst: false,
    columns: 24,
    offset: "30px",
    outputStyle: "scss",
    container: {
        maxWidth: "1170px",
        fields: "15px",
        containerWidth: "1170px"
    },
    breakPoints: {
        xlg: {
            width: "1499.99px",
            fields: "15px",
            containerWidth: "1170px"
        },
        lg: {
            width: "1199.99px",
            fields: "15px",
            containerWidth: "750px"
        },
        md: {
            width: "991.99px",
            fields: "15px",
            containerWidth: "750px"
        },
        sm: {
            width: "767.99px",
            fields: "15px",
            containerWidth: "100%"
        },
        xs: {
            width: "575.99px",
            fields: "15px",
            containerWidth: "100%"
        }
    },
});
module.exports = {
    title: `Grafana Azure Plus Datasource`,
    description: `Grafana Azure Plus Datasource plugin`,
    base: '/grafana-azure-datasource/',
    dest: 'docs',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            {
                text: "Change Log",
                link: "CHANGELOG"
            },
            {
                text: "Report Bug",
                link: "https://github.com/yesoreyeram/grafana-azure-datasource/issues/new/choose"
            },
            {
                text: "Github",
                link: "https://github.com/yesoreyeram/grafana-azure-datasource"
            }
        ],
        sidebar: [
            '/',
            ['/CHANGELOG', 'Change Log']
        ]
    }
}
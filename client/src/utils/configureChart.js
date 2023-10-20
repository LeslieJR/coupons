import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
export function configureChart() {
    Chart.register(ArcElement, Tooltip, Legend, Title);
    
    Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
    Chart.defaults.plugins.legend.position = 'right';
    Chart.defaults.plugins.legend.title.display = true;
    Chart.defaults.plugins.legend.title.text = 'Promotion types';
    Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';
}


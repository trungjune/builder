import grapesjs from "grapesjs";
import loadComponents from "./components";

export default grapesjs.plugins.add("charts", (editor, opts = {}) => {
  const default_blocks = {
    lineChart: true,
  };
  const default_labels = {
    lineChart: "Line Chart",
  };
  const default_types = {
    lineChart: "lineChart",
  };

  const options = {
    ...{
      blocks: default_blocks,
      labels: default_labels,
      types: default_types,
      labelChartCategory: "Charts",
    },
    ...opts,
  };
  loadComponents(editor, options);
});

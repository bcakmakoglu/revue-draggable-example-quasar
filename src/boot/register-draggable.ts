import { DraggablePlugin } from '@braks/revue-draggable';
import { BootCallback } from '@quasar/app';

export default (({ app }) => {
  // We globally register our directive with Vue;
  // Rememeber that all directives in Vue will start with 'v-'
  // but that should not be part of your directive name
  // https://vuejs.org/v2/guide/custom-directive.html
  // 'my-directive' will be used as 'v-my-directive'
  app.use(DraggablePlugin); // Registers Directive and Components
  // app.directive('draggable', DraggableDirective) // only registers the directive
}) as BootCallback<unknown>

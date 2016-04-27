/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('page/page-drawer', 'Integration | Component | page/page drawer',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#page/page-drawer}}
      //     template content
      //   {{/page/page-drawer}}
      // `);

      this.render(hbs`{{page/page-drawer}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);

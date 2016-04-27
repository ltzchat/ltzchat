/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('page/page-header', 'Integration | Component | page/page header',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#page/page-header}}
      //     template content
      //   {{/page/page-header}}
      // `);

      this.render(hbs`{{page/page-header}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);

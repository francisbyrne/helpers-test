import { Mongo } from 'meteor/mongo';
import 'meteor/dburles:collection-helpers';

export const Teams = new Mongo.Collection('teams');

Teams.helpers({
  foo() {
    return 'blah';
  }
});

import { Mongo } from 'meteor/mongo';

export const Teams = new Mongo.Collection('teams');

Teams.helpers({
  foo() {
    return 'blah';
  }
});

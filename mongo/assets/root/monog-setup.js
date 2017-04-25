/**
 * Initiate the Replica Set
 */
rs.initiate();

/**
 * Create the kadira_app account
 */
db.getSiblingDB('kadira_app').createUser({
 user:   "kadira-user",
 pwd:    "secret-password",
 roles:  [{
   role: "dbOwner",
   db:   "kadira_app"
 }]
});

/**
 * Create the kadira_data account
 */
db.getSiblingDB('kadira_data').createUser({
 user:   "kadira-user",
 pwd:    "secret-password",
 roles:  [{
   role: "dbOwner",
   db:   "kadira_data"
 }]
});

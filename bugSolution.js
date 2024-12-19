```javascript
// Correct usage for single value matching:
db.collection.find({ field: "value" }); 

// Correct usage of $in with multiple values
db.collection.find({ field: { $in: ["value1", "value2"] } });
```
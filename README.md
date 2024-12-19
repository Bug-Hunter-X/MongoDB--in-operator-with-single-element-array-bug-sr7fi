# MongoDB $in Operator with Single Element Array Bug

This repository demonstrates a common error when using the `$in` operator in MongoDB queries with a single-element array.  The `$in` operator is intended for querying multiple values; however, using it with a single element doesn't always produce the expected results.  This can lead to incorrect data retrieval or unexpected behavior in your application.  The solution demonstrates the correct way to handle this scenario using a simple equality check.

# Objects and arrays
## Objects - Big-O
An object is collection of key value pairs

```
const person = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}
```

- **Insert - O(1)**
- **Remove - O(1)**
- **Access - O(1)**
- **Search - O(n)**
- **Object.keys - O(n)**
- **Object.values - O(n)**
- **Object.entries - O(n)**


## Arrays - Big-O
An array is an ordered collection of values

```
const odd = [1, 3, 5, 7, 9]
```

- **Insert / remove at end - O(1)**
- **Insert / remove at beginning - O(n)**
- **Access - O(1)**
- **Search - O(n)**
- **push / pop - O(1)**
- **shift / unshift / concat / slice / splice - O(n)**
- **forEach / map / filter / reduce - O(n)**

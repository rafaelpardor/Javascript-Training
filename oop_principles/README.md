# The principles of Object Oriented Javascript
Most developers associate object-oriented programming with languages like C++ and Java, 
wich base object-oriented programming around classes. Before you can do anything in these 
languagues, you need to create a create a class, even if you're just writing a simple 
command line program.

Object-oriented languages have several characteristics:
- _Encapsulation_: Data can be grouped together with functionality that operates on that data.
This, is the definitino of an object.
- _Aggregation_: One object can reference object.
- _Inheritance_: A newly created object has the same characteristics as another object without 
explicitly duplicating its functionality.
- _Polymorphism_: One interface may be implemented by multiple objects.

Javascript has all these characteristics, though because the language has no conpet of classes,
some aren't implemented in quite the way you might expect. At first glance, a JS program might 
even look like a procedural program you would write in C.

Many object-oriented languages use dot notation to access properties and methods on objects, 
and JS is syntactically the same. But un JS, you never need to write a class definition, 
import a packagae, or include a header file. You just start coding with the data types that you 
want.

## Chapter 1: Primitive and Reference  Types
Javascript has no formal support for classes, from the beginning tou can just write code and 
create data structures as you need them. Almost all data in JS is either an objet or accesed 
through objects. Even functions are represented as objects.

Working with objects is key to undersating JS as a whole. You can create objects at any time 
and add or remove properties from them whenever you want. In addition, objects are extremely 
flexible and have capabilities that create unique and interesting patterns that are simply 
not possible in other languages.

### What Are Types?
JS has no conpect of classes, it still uses two kinds of types: primitive and reference.

_Primitive Types_ are sotred as simple data types. _Reference Types_ are sotred as objects, 
which are really just references to locations in memory. The tricky thins is that JS lets you 
treat primitive types like teference types in order to make the languague more consistent for 
the developer.

While other programming languages distinguish between primitive and reference types by storing 
primitives on the stack and references in the heap, JS does away with this concept completely.
It Tracks variables for a particular scope with a _variable object_. Primitive values are 
stored directly on the varialbe object, while reference values are placed as apointer in the 
variable object, which serves as a refereence to a location in memory where the object is 
sotored.

### Primitive Types
Primitive types represent simple pieces of data that are stored as is, such as `true` and `25`.
- __Boolean__: `true` or `false` values.
- __Number__: Any integer or floating-point numeric value.
- __String__: A character or sequence of characters delimited by either single or double quotes.
- __Null__: A primitive type that has only one value, `null`.
- __Undefined__: A primitive type that has only one value, `undefined`.

The first three types behave in similar ways, while the last two, work a lit bit differently. 
All primitive types have literal representations of their values. _Literals_ represent values 
that aren't stored in a variable, such as a hardcoded name or price.

[Example of primitive values](./01-primitive-values.js)

In JS, a variable holding a primitive directly contains the primitive value to a variable, the 
value is copied into that variable. This means that if you set one variable equal to another, 
each variable gets its own copy of the data.

At the example, `color1` is assigned the value of "red". The variable `color2` is then 
assigned the value of `color1`. Even though `color1` and `color2` contain the same value, 
they are competely separate from each other, and you can change the value in `color1` 
without affecting `color2` and vice-versa. That's because there are two different storage 
locations, one for each variable. Because each variable containing a primitive value uses 
its own storage space, change to one variable are not reflected on the other.

### Identigying Primitive Types
The best way to identify primitive types is with the `typeof` operator, which works on any 
variable and returns a string indicating the type of data. The `typeof` operator works well 
with strings, numbers, booleans, and undefined.

[Example of identifying primitive types](./02-identifying_primitive_types.js)

### Reference Types
Reference types represent objects in JS are the closest things to classes that you will find 
in the language. Reference values are _instances_ of reference types and are synonymous with 
objects (we will refer to reference values as _objects_). An object is an unordered list of 
_properties_ consisting of a name, always a string, and a value. when the value of a property 
that contains an array and one that contains a function except that a function can be 
executed.

#### Creating Objects
It sometimes helps to think of JS objects as nothing more than hash tables. There are a couple 
of ways to create, or _instantiate_, objects. The first is to use the `new` operator with a 
_constructor_. Constructors in JS begin with a capital letter to distinguish them from 
nonconstructor functions.  

Reference types do not store the object directly into the variable to which it is assigned, 
so the object variable in the example does't actually contain the object instance. Instead, 
it holds a pointer to the location in memory where the object exists. This is the primary 
diference between objects and primitive values, as the primitive is stored directly in the 
variable.

When you assign an object to a variable, you're actually assigning a pointer. That means if 
you assihn one variable to another, each variable gets a copy of the pointer, and both still 
reference the same object in memory.

```js
var object1 = new Object();
var object2 = object1;
```

Code above, first create an object with new, and stores a reference in object1. Then, object2 
is assigned the value of object2. there is still only the one instance og the object that was 
created on the first line, but both variables point to that object.

#### Dereferencing Objects
JS is a __garbage-collected__ language, so you don't really need to worry aboyt memory all 
allocations when you use reference types. However, it's best to _dereference_ objects that 
you no longer need so that the garbage collector can free up that memory. The best way yo do 
this is to set the object variable to null.

```js
var object1 = new Object();
// do something
object1 = null;
```

`object1` is created and used before finally beign set to null. When there are no more 
references to an object in memory, the garbage collector can use that memory for something 
else. 

#### Adding or Removing Properties
Another interesting aspect of objects in JS is that you can add and remove properties at 
any time.

```js
let object1 = new Object();
let object2 = object1;

object1.customeProperty = "Awesome";
console.log(object2.customeProperty); // "Awesome"
```

### Instantiating Built-In Types
#### Literal Forms
#### Object and Array Literals
#### Function Literals
#### Regular Expression Literals
### Property Access
### Identifying Arrays
### Primitive Wrapper Types

## Chapter 2: Functions

## Chapter 3: Understanding Objects
### Defining Properties
### Detecting Properties
### Removing Properties
### Enumeration
### Types of Properties
### Property Attributes
#### Common Attributes
#### Data Property Attribytes
#### Accessor Property Attributes
#### Defining Multiple Properties
#### Retriving Property Attributes
### Preventing Object Modification
#### Preventing Extensions
#### Sealing Objects
#### Freezing Objects

## Chapter 4: Contructors and Prototypes
### Constructors
### Prototypes
#### The [[Prototype]] Property
#### Using Prototypes with Constructors
#### Changing Prototypes
#### Built-in Object Prototypes

## Chapter 5: Inheritance
## Chapter 6: Object Patterns


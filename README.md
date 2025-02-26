# objectmanipulation

Here is the content of the sculptureListLengths object that I created in my solution:

for (const section of sculptureList) {
    const ObjectNew = {};
    for (const key in section){
        ObjectNew[key] = section[key].length;
    }
    sculptureListLengths[section.name] = ObjectNew;

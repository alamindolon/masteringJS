const bottle = {color: 'yellow', price: 50, isCleanded: true, capacity: 1};

const keys = Object.keys(bottle);

for (const key of keys)
{
    console.log(key);
    // console.log(bottle[key]);
}

for(const key in bottle)
{
    console.log(key);
}

for(const [key, value] of Object.entries(bottle))
{
    console.log(key,value);
}


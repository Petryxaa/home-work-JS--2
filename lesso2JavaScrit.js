//--створити масив та вивести його в консоль:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//let masuv1 = [1,2,3,4,5,"hello","Go Go go","let","css","JS"];
//let masuv2 = ["hello","Go Go go","let","css","JS",]
//let masuv3 = [1000,2222,333,4444,777,"hello","Go Go go","let","css","JS",true,false]
//console.log(masuv1,masuv2,masuv3);
//console.log(masuv1);
//console.log(masuv2);
//console.log(masuv3);
//
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//let masuv1 = [1,2,3,4,5,"hello","Go Go go","let","css","JS"];
//
//console.log(masuv1[5],masuv1[8],masuv1[2],masuv1[0]);
//console.log(masuv1[0]);
//console.log(masuv1[9]);
//
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
////
//for(let i = 0 ; i < 10 ; i++){
    //        //document.write('<div> c довільним текстом всередині </div>');
    //}
    
    ////- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
    //    //document.write(`<div>c довільним текстом всередині ${i} </div>`);
    
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//let i = 0;
//while(i < 20){
    //    i++;
    //document.write(`<div>c довільним текстом всередині.</div>`);
    //document.write(`<div>c довільним текстом всередині ${i}</div>`);
    //}
    
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

//let i = 0;
//while(i<20){
    //    i++;
    //    document.write(`<h1> c довільним текстом ${i}</h1>`);
    //}
    //let i = 20;
    //while(i>0){
        //    i--;
        //    document.write(`<h1> c довільним текстом ${i}</h1>`);
        //}
 //- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//let masuv = ["",10,20,30,40,50,60,70,80,90,100] 
//
//for(let i = 0;i < masuv.length;i++){
//    document.write(masuv);
//    console.log(masuv);
//}
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

//let masuv = ["hello","world","son","new","year","2021"," I "," work",""]
//for(let i = 0 ; i < 10 ;i++){
//
////document.write(masuv);
////console.log(masuv);
////document.write(masuv[0]);
//}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//let masuv = [1,2,3,true,false,"hello",'world',-1,777]
//for(let i = 0 ; i < masuv.length;i++){
//console.log(masuv);
//}
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

//let masuv = [10,20,30,"sss","ddd",true,-30,false,]
//for(let i = 0; i < masuv.length;i++){
    //    if(typeof masuv[i] === "boolean" ){
        //        console.log(masuv[i]);
        //    }
        //    
        //}
        
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

//let masuv = [10,20,30,"sos","help",true,-30,false,];
//
//for(let i = 0; i < masuv.length;i++){
    //    if(typeof masuv[i] === "number"){
        //console.log(masuv[i]);
        //}
        //}
        //- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
        
        //let masuv = [10,20,30,"sos","help",true,-30,false,];
        //
        //for(let i = 0; i < masuv.length;i++){
            //      if(typeof masuv[i] ==="string"){
                //        console.log(masuv[i]);
                //      }
                //    }
                
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

//
//let masuv1 = [];
//
//let  masuv2  = [ [10,20,30,],["string", " age","namber"],[true,false]];  

//for (masuv1 of masuv2){
//console.log(masuv1);
//console.log(masuv1[0]);
//  console.log(masuv1[1]);
//  console.log(masuv1[2]);
//}
    

//for (let i = 0; i < masuv2.length ;i++){
    //for (let j = 0 ; j < masuv2.length; j++){
        //    console.log(masuv2[i][j]);
        //}
        //}
        
            //for(let i = 0 ; i < masuv2.length; i++){
            //    console.log(masuv2[i]);
            //}


//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

//for(let i = 0;i < 10;i++){
//document.write(i);
//console.log(i);
////- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//for(let i = 0 ;i < 100;i++){
//document.write(i);
//console.log(i);
//}
////- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

//for ( let i = 0; i < 100 ; i = i + 2){
  //  console.log(i);
//}

//for( let i = 0 ; i < 100 ; i+=2){
//console.log(i);
//}
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//for(let i = 0;i < 100 ; i+=2){
//    console.log(i);
//    document.write(i);
//}
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//for(let i = 1 ; i < 100; i++){
//    if( i % 2 === 1 ){
//        console.log(i);
//    }
//    
//}
//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//for( let i = 0 ; i < 2 ;i++){
//    for(let j = 0; j < 60; j++){
//        console.log(i,j);
//    }
//}
//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//for(let i = 0 ; i < 2 ; i++){
//    for(let m = 0; m < 60;m++){
//        for(let s = 0;s < 60;s++){
//            console.log(i,m,s);
//        }
//    }
//}

//Додатково
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//let masuv = ['a', 'b', 'c'];
//
//let a = " " + masuv;
//for(let i = 0 ; i < masuv.length; i++){
//    console.log(a);
//}

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

//let masuv = ['a', 'b', 'c'];
//
//let i = 0;
//let a = " ";
//while(i < masuv.length){
//    a = a + masuv[i]
//    i++;
//    document.write(a);
//    console.log(a);
//}
//let words = ['a', 'b', 'c'];
//let i = 0;
//while(i < words.length){
//    document.write(words[i]);
//    i++;
//}
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//let words = ['a', 'b', 'c'];
//let s = "";
//for(let clovo of words){
//s = s + clovo;    
//}
//document.write(s);
//console.log(s);


//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
//let words = ['a', 'b', 'c'];
//let s = "";
//for(let clovo in words){
//s = s + words[clovo];    
//}
//document.write(s);
//console.log(s);


//
//=================
//=================
//=================
//=================
//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//let masuv = ['a', 'b', 'c'];
//let namber = [1, 2, 3];
//
//for(let s of namber){
//     masuv.push(s); 
//}
//console.log(masuv);
//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
///////////////////////////////
//let masuv = [1,2,3];
//for(let i = masuv.length - 1 ; i >= 0; i--){
//    console.log(masuv[i]);
//}
///////////////////////////////
//let masuv = [1,2,3];
//let newMasuv = masuv.reverse();
//console.log(newMasuv);
//////////////////////////////
//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
//
//let masuv = [1, 2, 3,];
//masuv.push(4,5,6);
//console.log(masuv);
//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
///
///let masuv = [1, 2, 3,];
///masuv.unshift(4, 5, 6);
///console.log(masuv);
///
//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
//let masuvString = ['js', 'css', 'jq'];
//masuvString.shift(masuvString)
//console.log(masuvString);
////- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
//let masuv = ['js', 'css', 'jq'];
//masuv.pop();
//console.log(masuv);
////- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
//let masuv = [1, 2, 3, 4, 5];
//let newmasuv = masuv.slice(3);
//console.log(newmasuv);
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
//let masuv = [1, 2, 3, 4, 5];
//let newmasuv = masuv.slice(0,2);
//console.log(newmasuv);
////- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
//
//let masuv = [1, 2, 3, 4, 5];
//masuv.splice(1,2);
//console.log(masuv);
////
//let n = ["1","2",3 ,4]
//n.splice(2)
//console.log(n);
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

//
//let masuv = [1, 2, 3, 4, 5];
//masuv.splice(1,1,2,'a','b','c')
//console.log(masuv);
//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

//let masuv = [1, 2, 3, 4, 5]
//
//masuv.splice(1,4,'a','b',2,3,4,'c',5,'e')
//console.log(masuv);

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//let masuv =[1,2,3,4,5,6,7,8,9,10]
//
//for(let i = 0;i < masuv.length;i++){
//if(i % 2 === 1)
//    console.log(masuv[i]);
//}
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

//let masuv = [100,200,233,777,1001,186362,10010];
//
//let masuv1 = [];
//let masuv2 = [];
//
//for(let i = 0; i < masuv.length;i++){
//    masuv1.push(masuv[i]);
//}
//
//for(let j = 0;j < masuv.length;j++){
//    masuv2.push(masuv[j]);
//}
//console.log(masuv1,masuv2);
///////////////////////////////////
//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//
//let namber = [100,2222,111,777,001,2003,0999]
//let masuv1 = [];
//let masuv2 = [];
//for(masuv1 of namber){
//    console.log(masuv1);
//}
//for(masuv2 of namber){
//    console.log(masuv2)
//}
//
//============
//
//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//1. перебрати його циклом while
//2. перебрати його циклом for
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
//5. перебрати циклом while та вивести  числа тільки парні  значення
//6. перебрати циклом for та вивести  числа тільки парні  значення
//7. замінити кожне число кратне 3 на слово "okten"
//8. вивести масив в зворотньому порядку.
//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//10
// створити пустий масив та :
//- заповнити його 50 парними числами за допомоги циклу.
//- заповнити його 50 непарними числами за допомоги циклу.
//
////1. перебрати його циклом while
//let masuv =[2,17,13,6,22,31,45,66,100,-18];
//
//let i = 0;
//while(i < masuv.length){
//    console.log(masuv[i])
//    i++;    
//}
////////////////////////////////////////////////
//
//let masuv =[2,17,13,6,22,31,45,66,100,-18];
//
//let i = 0;
//while(i < masuv.length){
//    i++;    
//}
////console.log(masuv);
///////////////////////////////////////////////////
//2. перебрати його циклом for
//
//let masuv =[2,17,13,6,22,31,45,66,100,-18];
//
//for ( let i = 0;i < masuv.length;i++){
//    console.log(masuv[i]);
//}
//let masuv =[2,17,13,6,22,31,45,66,100,-18];
//
//for ( let i = 0;i < masuv.length;i++){
//    console.log(masuv);
//}
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
//let masuv =[2,17,14,777,22,31,45,1,100,-18];
//let i = 0;
//while(i < masuv.length){
//    if(i % 2 === 1);    
//    console.log(masuv[i]);
//    i++;
//}

///4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
//let masuv =[2,17,14,777,22,31,45,1,100,-18];
//for(let i = 0;i < masuv.length;i++){
//if(i % 2 === 1)
//    console.log(masuv[i]);
//}
//






//5. перебрати циклом while та вивести  числа тільки парні  значення
//let masuv =[2,17,14,777,22,31,45,1,100,-18];
//let i =0;
//while(i < masuv.length){
    //    if( i % 2 === 0){
        //    i+=2;
        //        console.log(masuv[i]);
//    }
//}
//




//6. перебрати циклом for та вивести  числа тільки парні  значення
//let masuv =[2,17,14,6,22,31,45,66,100,-18];
//for(let i = 0;i < masuv.length;i++){
//if(i % 2 === 0)
//    console.log(masuv[i]);


//7. замінити кожне число кратне 3 на слово "okten"
//
//let masuv =[2,17,14,6,22,31,45,66,100,-18];
//let newMasuv = [];
//for(let i = 0 ; i < masuv.length;i++){
//if(masuv[i] % 3 === 0){
//    masuv[i] = 'okten';
//}
//console.log(masuv[i]);
//}

//8. вивести масив в зворотньому порядку.
//let masuv =[2,17,14,6,22,31,45,66,100,-18];
//for(let i = masuv.length - 1 ; i >= 0; i--){
    //console.log(masuv[i]);
    //}
    //9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// #1:   
//let masuv =[2,17,14,6,22,31,45,66,100,-18];
//let i = masuv.length - 1;
//while(i >= 0){
//    i--;    
//console.log(masuv);
//console.log(masuv[i]);
//}
//
//    10
// створити пустий масив та :
//- заповнити його 50 парними числами за допомоги циклу.
//let masuv = [];
//
//for(let i  = 0;i < 50 ;i+=2){
//    masuv.push(i);
//}
//console.log(masuv);
//////////////////////////////////////////////////////////
//- заповнити його 50 непарними числами за допомоги циклу.
//let masuv = [];
//
//for(let i  = 0;i < 50 ;i+=1){
//if( i % 2 ===1)
//    masuv.push(i);
//}
//console.log(masuv);
//3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
    // диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
    
//let array = [];
//
//for(let i = 0;i < 10;i++){
//    array[i] = Math.floor(Math.random() * 732-8)+8;
//    console.log(array[i]);
//}
// 2. вывести на консоль  каждый третий елемент
//let array = [];
//
//for(let i = 0;i < 10;i+=3){
//    array[i] = Math.floor(Math.random() * 732-8)+8;
//if(array[i] % 3 === 0)
//    console.log(array[i])
//}

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.
//let array = [];
//for(let i = 0;i < 10;i+=2){
//    array[i] = Math.floor(Math.random() * 732-8)+8;
//    if(array[i]%2 ==0){
//        console.log(array[i])
//    }
//}
    // 4. вывести на консоль  каждый третий елемент
    // но при условии что он имеет парное значение и
    // записать их в другой массив.
    
//let array = [];
//let masuv = [];
//for(let i = 0;i < 20;i+=2){
//array[i] = Math.floor(Math.random() * 732-8)+8; 
//    if(array[i]  % 3 ===0){
//        masuv.push(array[i]);
//        console.log(masuv);
//    }
//    }
//

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
//let array = [100,250,50,168,120,345,188];
//for (let i = 1;i < array.length;i++ ){
//    if(array[i] % 2 ===0){
//        console.log(array[i])
//    }
//
//}
//3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//let masuv = [];
//let array = [];
//
//for(let i = 0; i < 10;i++);{
//    masuv = Math.floor((Math.random()*100)); 
//} 
////console.log(masuv)
//for(let j = 0 ; j < masuv.length;j++){
//    array[i] = masuv[i] * 5;
//}
//array.push(masuv);
//console.log(array);
//
//4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
    // додати його в інший масив.
//let masuv = ['aaa',22,55,100,'help'];
//let namber = [];
//for(let i = 0;i < masuv.length;i++){
//    if(typeof masuv[i] === 'number'){
//        namber.push(masuv[i]);
//    }
//}
//console.log(namber);
 

    
    
    
























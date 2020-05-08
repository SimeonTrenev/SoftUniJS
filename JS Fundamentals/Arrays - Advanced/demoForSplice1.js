let array = ['1', '2', '3', '4']

array.splice(1,0,'Feb01')
console.log(array.join(' '))
array.splice(1,1,'kur') /// 1-vi parametur e indeksa, 2ri parametur e kolko elementa da se iztriqt,
                                        //3ti parametur e kakvo da se dobavi na suotvetniq indeks
console.log(array.join(' '))
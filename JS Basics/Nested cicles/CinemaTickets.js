function solve(input){
            
    
            let filmName = input.shift();
            let studentsTicket = 0;
            let standardTickets = 0;
            let kidsTicket = 0;
            let allTicketsCounter = 0;
            while(filmName !== 'Finish'){
                let freeSeats = +input.shift();
                let typeOfTicket = input.shift();
                let ticketCounter = 0;
                while(typeOfTicket !== 'End'){
                    if(typeOfTicket === 'standard'){
                        standardTickets++;
                    }else if(typeOfTicket === 'kid'){
                        kidsTicket++;
                    }else if(typeOfTicket === 'student'){
                        studentsTicket++;
                    }
                    
                    ticketCounter++;
                    allTicketsCounter++;
                  
                    if(ticketCounter >= freeSeats){
                        
                        break;
                    }
                    typeOfTicket = input.shift()
                    
                }
                console.log(`${filmName} - ${(ticketCounter / freeSeats* 100).toFixed(2)}% full.`)
                
               
                filmName = input.shift();
                
            }
            
            console.log(`Total tickets: ${allTicketsCounter}`)
            console.log(`${(studentsTicket / allTicketsCounter * 100).toFixed(2)}% student tickets.`)
            console.log(`${(standardTickets / allTicketsCounter * 100).toFixed(2)}% standard tickets.`)
            console.log(`${(kidsTicket / allTicketsCounter * 100).toFixed(2)}% kids tickets.`)
            
        
}

solve([    'Taxi',     '10',
'standard', 'kid',
'student',  'student',
'standard', 'standard',
'End',      'Scary Movie',
'6',        'student',
'student',  'student',
'student',  'student',
'student',  'Finish'  ])
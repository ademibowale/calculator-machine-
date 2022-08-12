import calculate from '../logic/calculate';
describe("testing the calcultion logic",()=>{
          test("testing first input",()=>{
            let obj={
                    total: null,
                    next: null,
                    operation: null,
                  };
                  let result=calculate(obj,"3")
            expect(result.next).toBe("3")       
 }) 

 test("testing second input",()=>{
          let obj={
                  total: null,
                  next: "5",
                  operation: null,
                };
                let result=calculate(obj,"+")
          expect(result.total).toBe("5")    
          expect(result.operation).toBe("+")     
}) 

test("testing third input",()=>{
          let obj={
                  total: "10",
                  next: null,
                  operation: "+",
                };
                let result=calculate(obj,"3")
          expect(result.next).toBe("3")       
}) 

test("testing total output",()=>{
          let obj={
                  total: "10",
                  next: "3",
                  operation: "+",
                };
                let result=calculate(obj,"=")
          expect(result.total).toBe("13")       
}) 

test("testing clear output",()=>{
          let obj={
                  total: "10",
                  next: "3",
                  operation: "+",
                };
                let result=calculate(obj,"AC")
          expect(result.total).toBe(null)    
          expect(result.next).toBe(null)  
          expect(result.operation).toBe(null)     
}) 





})
let bar: number = foo;
/*notice variable foo is declared in foo.ts and is not accessible in bar.ts eventhough both 
  the files are in the same folder. 
  To use foo in another file, we would have to use export at the beginning and 
  to use it another file  use import. Check the other example fooAlertnative.ts barAlternative.ts
*/
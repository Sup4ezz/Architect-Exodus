//priority: 99951




const FTBUtilsKJS = {
  NIL_UUID: new Java$UUID(0,0),
  createConsumer: function (fun) {
    return KubeJS$UtilsJS.makeFunctionProxy("server", Java$Consumer, fun);
  },
  createPredicate: function (match) {
    return KubeJS$UtilsJS.makeFunctionProxy("server", Java$Predicate, match);
  }
}
{
  try {
    throw undefined;
  } catch ($i) {
    {
      $i = 1;
      for (; $i < 10; $i++) {
        try {
          throw undefined;
        } catch (i) {
          {
            i = $i;
            try {
              {
                try {
                  throw undefined;
                } catch ($i) {
                  {
                    $i = 1;
                    for (; $i < 10; $i++) {
                      try {
                        throw undefined;
                      } catch (i) {
                        {
                          i = $i;
                          try {
                            console.log('Block scoping:', i);
                          } finally {
                            $i = i;
                          }
                        }
                      }
                    }
                  }
                }
              }
            } finally {
              $i = i;
            }
          }
        }
      }
    }
  }
}
var fn = (function($__0) {
  var $__2;
  var $__1 = $traceurRuntime.assertObject($__0),
      a = ($__2 = $__1.a) === void 0 ? true : $__2,
      b = $__1.b;
  console.log(a, b);
});
fn({b: 'world'});

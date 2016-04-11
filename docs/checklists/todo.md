# Todo Checklist

Todo lists can grow crazy over the life of a project. Crazy is bad, avoid crazy.

## Testing

Research different options. I want something that's supported, runs on both the
server and browser and i prefer the unix philosophy of do one thing well.

Mocha comes with a runner command but jasmine2 doesn't. Mocha does 1 thing,
jasmine2 is kitchen sink. It's like browserify vs webpack. Mocha runs on the
server and browser.

Chai is an assertion library with the option of bdd expect style assertions.

Sinon is a convenience for test doubles, specifically it saves some boiler plate
code in faking and spying.

## Formatting

It should not be up to individual developers to ensure formatting is consistant.
Some standard formatting tool should be applied before commit automatically.

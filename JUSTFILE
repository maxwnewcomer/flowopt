# Define a default recipe, if you run `just` without arguments
default: watch

# Define a build recipe
build:
    cargo build

# Define a run recipe
run: build
    cargo run

# Define a test recipe
test:
    cargo test

# Define a clean recipe
clean:
    cargo clean

# Define a watch recipe that uses cargo-watch
watch:
    cargo watch -x "run --bin server"

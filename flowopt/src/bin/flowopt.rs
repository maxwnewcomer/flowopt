use actix_web::{middleware::Logger, web, App, HttpServer, Responder};
use clap::Parser;
use env_logger::Env;
use std::sync::Mutex;

/// Modflow TPE Optimization
#[derive(Parser, Debug)]
#[command(author, version, about, long_about = None)]
struct Args {
    /// FlowOpt Log Filepath
    #[arg(short, long, default_value_t = String::from("flow.opt"))]
    optlogpath: String,

    /// Number of iterations
    #[arg(short, long, default_value_t = 100)]
    iterations: i32,
}

struct OptLog {
    file: Mutex<String>,
}

async fn index() -> impl Responder {
    "Hello world!"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let args = Args::parse();
    env_logger::init_from_env(Env::default().default_filter_or("info"));

    HttpServer::new(move || {
        App::new()
            .wrap(Logger::default())
            .app_data(web::Data::new(OptLog {
                file: Mutex::new(String::from(args.optlogpath.clone())),
            }))
            .service(
                web::scope("/opt")
                    .route("/trial", web::post().to(index))
                    .route("/trial", web::get().to(index)),
            )
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}

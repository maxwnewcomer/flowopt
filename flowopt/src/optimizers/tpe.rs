use std::sync::Mutex;

use actix_web::Responder;
use rand::rngs::StdRng;

pub struct OptState {
    pub best_value: Mutex<f64>,
    pub rng: Mutex<StdRng>,
}

fn objective(mb: f32, time: f32) -> f32 {
    return mb * time;
}

pub async fn ask() -> impl Responder {
    "Hello"
}

pub async fn tell() -> impl Responder {
    "Goodbye"
}

class WoofsController < ApplicationController
  before_action :set_woof, only: [:show, :edit, :update, :destroy]

  # GET /woofs
  # GET /woofs.json
  def index
    @woofs = Woof.all

    render json: @woofs
  end

  # GET /woofs/1
  # GET /woofs/1.json
  def show
    render json: @woof
  end

  # POST /woofs
  # POST /woofs.json
  def create
    @woof = Woof.new(woof_params)
    if @woof.save
      render json: @woof, status: :created, location: @woof
    else
      render json: @woof.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /woofs/1
  # PATCH/PUT /woofs/1.json
  def update
    if @woof.update(woof_params)
      head :no_content
    else
      render json: @woof.errors, status: :unprocessable_entity
    end
  end

  # DELETE /woofs/1
  # DELETE /woofs/1.json
  def destroy
    @woof.destroy

    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_woof
      @woof = Woof.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def woof_params
      params.require(:woof).permit(:name, :content)
    end
end
